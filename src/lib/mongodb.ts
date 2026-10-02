import { MongoClient } from "mongodb";

const globalForMongo = globalThis as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

/**
 * MongoDB 연결을 재사용한다. (개발 모드 HMR, 서버리스 환경에서 연결이 계속 늘어나는 것을 방지)
 * MONGODB_URI가 없으면 null을 반환한다.
 */
export function getMongoClient(): Promise<MongoClient> | null {
  const uri = process.env.MONGODB_URI;
  if (!uri) return null;

  if (!globalForMongo._mongoClientPromise) {
    globalForMongo._mongoClientPromise = new MongoClient(uri, {
      serverSelectionTimeoutMS: 5000,
    })
      .connect()
      .catch((error) => {
        // 실패한 연결이 캐시에 남지 않도록 비운다.
        globalForMongo._mongoClientPromise = undefined;
        throw error;
      });
  }
  return globalForMongo._mongoClientPromise;
}
