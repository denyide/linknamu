import { getMongoClient } from "@/lib/mongodb";

type ClickDoc = {
  linkId: string;
  count: number;
};

async function getCollection() {
  const clientPromise = getMongoClient();
  if (!clientPromise) return null;
  const client = await clientPromise;
  return client
    .db(process.env.MONGODB_DB || "linknamu")
    .collection<ClickDoc>("clicks");
}

/** 링크별 클릭 수. DB가 설정되지 않았거나 연결에 실패하면 빈 객체를 반환한다. */
export async function getClickCounts(): Promise<Record<string, number>> {
  try {
    const collection = await getCollection();
    if (!collection) return {};
    const docs = await collection.find().toArray();
    return Object.fromEntries(docs.map((doc) => [doc.linkId, doc.count]));
  } catch (error) {
    console.error("클릭 수를 불러오지 못했습니다:", error);
    return {};
  }
}

/** 클릭 수를 1 올리고 갱신된 값을 반환한다. DB가 설정되지 않았으면 null. */
export async function incrementClick(linkId: string): Promise<number | null> {
  const collection = await getCollection();
  if (!collection) return null;
  const doc = await collection.findOneAndUpdate(
    { linkId },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );
  return doc?.count ?? null;
}
