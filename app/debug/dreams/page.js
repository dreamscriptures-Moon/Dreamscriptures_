import { dreams } from "@/data/dreams";
import { requireAdmin } from "@/lib/adminAuth";

export const metadata = { robots: { index: false, follow: false } };


export default async function DreamAuditPage() {
  await requireAdmin();

  const audit = dreams

    .map((dream) => {

      const missing = [];



      // Core fields

      if (!dream.microSummary) missing.push("microSummary");

      if (!dream.shortDescription) missing.push("shortDescription");

      if (!dream.description) missing.push("description");

      if (!dream.emotionalMeaning)

        missing.push("emotionalMeaning");

      if (!dream.symbolicMeaning)

        missing.push("symbolicMeaning");

      if (!dream.spiritualMeaning)

        missing.push("spiritualMeaning");

      if (!dream.wakingLifeMeaning)

        missing.push("wakingLifeMeaning");

      if (!dream.summary) missing.push("summary");



      // Arrays

      if (!dream.contradictions?.length)

        missing.push("contradictions");



      if (!dream.types?.length)

        missing.push("types");



      if (!dream.behavioralInsights?.length)

        missing.push("behavioralInsights");



      if (!dream.emotionalStates?.length)

        missing.push("emotionalStates");



      if (!dream.subconsciousPatterns?.length)

        missing.push("subconsciousPatterns");



      if (!dream.emotionalTriggers?.length)

        missing.push("emotionalTriggers");



      if (!dream.lifeSituations?.length)

        missing.push("lifeSituations");



      if (!dream.dreamSymbols?.length)

        missing.push("dreamSymbols");



      if (!dream.relatedDreams?.length)

        missing.push("relatedDreams");



      if (!dream.categories?.length)

        missing.push("categories");



      return {

        title: dream.title,

        slug: dream.slug,

        missing,

      };

    })

   .sort((a, b) => b.missing.length - a.missing.length);



  const missingMicroSummary = audit.filter((d) =>

    d.missing.includes("microSummary")

  ).length;



  const missingShortDescription = audit.filter((d) =>

    d.missing.includes("shortDescription")

  ).length;



  const missingSummary = audit.filter((d) =>

    d.missing.includes("summary")

  ).length;



  const missingBehavioralInsights = audit.filter((d) =>

    d.missing.includes("behavioralInsights")

  ).length;



  const missingRelatedDreams = audit.filter((d) =>

    d.missing.includes("relatedDreams")

  ).length;



  const missingCategories = audit.filter((d) =>

    d.missing.includes("categories")

  ).length;



  const incompleteDreams = audit.filter(

    (d) => d.missing.length > 0

  );

const titleMap = {};



dreams.forEach((dream) => {

  const title = (dream.title || "")

    .trim()

    .toLowerCase();



  if (!titleMap[title]) {

    titleMap[title] = [];

  }



  titleMap[title].push(dream);

});



const duplicateTitles = Object.entries(titleMap)

  .filter(([_, dreams]) => dreams.length > 1)

  .sort((a, b) => b[1].length - a[1].length);



const linkedSlugs = new Set();



dreams.forEach((dream) => {

  dream.relatedDreams?.forEach((related) => {

    linkedSlugs.add(related.slug);

  });

});



const orphanDreams = dreams.filter(

  (dream) => !linkedSlugs.has(dream.slug)

);



  return (

    <main className="max-w-7xl mx-auto p-8">

      <h1 className="text-4xl font-bold mb-8">

        Dream Audit Dashboard

      </h1>



      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">

        <div className="border rounded-lg p-4">

          <div className="text-sm text-gray-500">

            Total Dreams

          </div>

          <div className="text-3xl font-bold">

            {dreams.length}

          </div>

        </div>



        <div className="border rounded-lg p-4">

          <div className="text-sm text-gray-500">

            Incomplete Dreams

          </div>

          <div className="text-3xl font-bold">

            {incompleteDreams.length}

          </div>

        </div>



        <div className="border rounded-lg p-4">

          <div className="text-sm text-gray-500">

            Missing Summaries

          </div>

          <div className="text-3xl font-bold">

            {missingSummary}

          </div>

        </div>



        <div className="border rounded-lg p-4">

          <div className="text-sm text-gray-500">

            Missing Micro Summaries

          </div>

          <div className="text-3xl font-bold">

            {missingMicroSummary}

          </div>

        </div>



        <div className="border rounded-lg p-4">

          <div className="text-sm text-gray-500">

            Missing Short Descriptions

          </div>

          <div className="text-3xl font-bold">

            {missingShortDescription}

          </div>

        </div>



        <div className="border rounded-lg p-4">

          <div className="text-sm text-gray-500">

            Missing Behavioral Insights

          </div>

          <div className="text-3xl font-bold">

            {missingBehavioralInsights}

          </div>

        </div>



        <div className="border rounded-lg p-4">

          <div className="text-sm text-gray-500">

            Missing Related Dreams

          </div>

          <div className="text-3xl font-bold">

            {missingRelatedDreams}

          </div>

        </div>



        <div className="border rounded-lg p-4">

          <div className="text-sm text-gray-500">

            Missing Categories

          </div>

          <div className="text-3xl font-bold">

            {missingCategories}

          </div>

        </div>

      </div>



<div className="mb-12">

  <h2 className="text-3xl font-bold mb-4">

    Duplicate Dream Titles

  </h2>



  {duplicateTitles.length === 0 ? (

    <p className="text-green-600">

      ✅ No duplicate titles found

    </p>

  ) : (

    <div className="space-y-4">

      {duplicateTitles.map(([title, dreams]) => (

        <div

          key={title}

          className="border rounded-lg p-4"

        >

          <div className="font-bold text-red-600 mb-2">

            {title} ({dreams.length})

          </div>



          {dreams.map((dream) => (

            <div key={dream.slug}>

              • {dream.title} — {dream.slug}

            </div>

          ))}

        </div>

      ))}

    </div>

  )}

</div>

<div className="mb-12">

  <h2 className="text-3xl font-bold mb-4">

    Orphan Dreams ({orphanDreams.length})

  </h2>



  {orphanDreams.length === 0 ? (

    <p className="text-green-600">

      ✅ No orphan dreams found

    </p>

  ) : (

    <div className="border rounded-lg overflow-hidden">

      {orphanDreams

        .sort((a, b) =>

          (a.title || "").localeCompare(b.title || "")

        )

        .map((dream) => (

          <div

            key={dream.slug}

            className="border-b p-3"

          >

            <div className="font-semibold">

              {dream.title}

            </div>



            <div className="text-sm text-gray-500">

              {dream.slug}

            </div>

          </div>

        ))}

    </div>

  )}

</div>



      <table className="w-full border-collapse">

        <thead>

          <tr className="bg-gray-100">

            <th className="text-left p-3 border">

              Dream Title

            </th>



            <th className="text-left p-3 border">

              Slug

            </th>



            <th className="text-left p-3 border">

              Missing Fields

            </th>



            <th className="text-left p-3 border">

              Status

            </th>

          </tr>

        </thead>



        <tbody>

          {audit.map((dream) => (

            <tr key={dream.slug}>

              <td className="border p-3">

                {dream.title}

              </td>



              <td className="border p-3 text-gray-500">

                {dream.slug}

              </td>



              <td className="border p-3">

                {dream.missing.length === 0

                  ? "-"

                  : dream.missing.join(", ")}

              </td>



              <td className="border p-3">

                {dream.missing.length === 0 ? (

                  <span className="text-green-600 font-semibold">

                    ✅ Complete

                  </span>

                ) : (

                  <span className="text-red-600 font-semibold">

                    ❌ {dream.missing.length} Missing

                  </span>

                )}

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </main>

  );

}
