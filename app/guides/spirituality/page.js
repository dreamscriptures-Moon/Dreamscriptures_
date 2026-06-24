import Link from "next/link";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import SearchBar from "@/app/components/SearchBar";

export const metadata = {
  title:
    "Dream Spirituality: Biblical, Islamic & Spiritual Perspectives on Dreams",

  description:
    "Explore spiritual dreams through biblical references, Quranic narratives, prophetic traditions, symbolism and personal reflection across different traditions.",

  alternates: {
    canonical: "/guides/spirituality",
  },
};

const startLearning = [

{
title:"What Are Spiritual Dreams?",
description:"Explore dreams through spirituality, symbolism and personal reflection.",
href:"#what-are-spiritual-dreams",
icon:"✨",
read:"5 min read"
},

{
title:"Prophetic Dreams",
description:"Learn how prophetic dreams appear across different traditions.",
href:"/guides/prophetic-dreams-meaning",
icon:"🔮",
read:"6 min read"
},

{
title:"Spiritual Dreams",
description:"Explore spiritual dream experiences and symbolism.",
href:"/guides/spiritual-dreams-meaning",
icon:"🌙",
read:"6 min read"
},

{
title:"Dreams in Sacred Texts",
description:"Explore biblical and Quranic dream narratives throughout history.",
href:"#bible-references",
icon:"📖",
read:"5 min read"
}

];

export default function DreamSpiritualityPage(){

return(

<main className="bg-[#F7F5F2] min-h-screen">

<SiteHeader/>

<section className="max-w-6xl mx-auto px-6 pt-12 pb-16">

<nav className="flex gap-2 text-sm text-[#8A8175] mb-10">

<Link href="/">Home</Link>

<span>›</span>

<Link href="/guides">Guides</Link>

<span>›</span>

<span>Spirituality</span>

</nav>

<p className="uppercase tracking-[0.22em] text-[#B79B5E] text-xs mb-4">

Dream School

</p>

<h1 className="font-serif text-5xl md:text-6xl text-[#1A1A1A] leading-tight mb-8">

Dream Spirituality

</h1>

<p className="max-w-3xl text-lg md:text-xl text-[#6B6B6B] leading-relaxed">

Explore how dreams have been understood through spirituality,
symbolism, sacred texts, prophetic narratives and personal reflection
across different traditions.

</p>

<div className="flex flex-wrap gap-3 mt-10">

<span className="bg-white border border-[#EAE6E1] rounded-full px-4 py-2 text-sm">

✨ Spiritual Perspectives

</span>

<span className="bg-white border border-[#EAE6E1] rounded-full px-4 py-2 text-sm">

📖 Bible References

</span>

<span className="bg-white border border-[#EAE6E1] rounded-full px-4 py-2 text-sm">

☪️ Quranic Narratives

</span>

</div>

</section>

<section className="max-w-5xl mx-auto px-6 mb-20">

<SearchBar/>

</section>

<section className="max-w-6xl mx-auto px-6 mb-20">

<div className="grid md:grid-cols-4 gap-6">

<div className="bg-white rounded-2xl border border-[#EAE6E1] p-6">

<p className="uppercase tracking-widest text-xs text-[#B79B5E] mb-3">

Perspectives

</p>

<p>

Christian

<br/>

Islamic

<br/>

African

</p>

</div>

<div className="bg-white rounded-2xl border border-[#EAE6E1] p-6">

<p className="uppercase tracking-widest text-xs text-[#B79B5E] mb-3">

Topics

</p>

<p>

Symbols

<br/>

Prayer

<br/>

Reflection

</p>

</div>

<div className="bg-white rounded-2xl border border-[#EAE6E1] p-6">

<p className="uppercase tracking-widest text-xs text-[#B79B5E] mb-3">

References

</p>

<p>

Bible

<br/>

Quran

<br/>

Historical Tradition

</p>

</div>

<div className="bg-white rounded-2xl border border-[#EAE6E1] p-6">

<p className="uppercase tracking-widest text-xs text-[#B79B5E] mb-3">

Reading Time

</p>

<h3 className="font-serif text-2xl">

30 min

</h3>

</div>

</div>

</section>

<section className="max-w-5xl mx-auto px-6 mb-20">

<div className="bg-white rounded-3xl border border-[#EAE6E1] p-8">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs mb-4">

START HERE

</p>

<h2 className="font-serif text-4xl mb-8">

Reading Path

</h2>

<div className="space-y-5 text-lg">

<a href="#what-are-spiritual-dreams">

① What Are Spiritual Dreams?

</a>

<div>↓</div>

<a href="#christian-perspectives">

② Christian Perspectives

</a>

<div>↓</div>

<a href="#islamic-perspectives">

③ Islamic Perspectives

</a>

<div>↓</div>

<a href="#african-perspectives">

④ African Perspectives

</a>

<div>↓</div>

<a href="#bible-references">

⑤ Bible References

</a>

<div>↓</div>

<a href="#quran-references">

⑥ Quran References

</a>

<div>↓</div>

<a href="#prophetic-figures">

⑦ Prophetic Figures

</a>

</div>

</div>

</section>

<section className="max-w-6xl mx-auto px-6 mb-24">

<div className="mb-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs">

START LEARNING

</p>

<h2 className="font-serif text-4xl mt-3">

Explore Dream Spirituality

</h2>

</div>

<div className="grid md:grid-cols-2 gap-6">

{startLearning.map((item)=>(

<a

key={item.title}

href={item.href}

className="bg-white border border-[#EAE6E1] rounded-2xl p-8 hover:shadow-md transition"

>

<div className="text-4xl mb-5">

{item.icon}

</div>

<p className="uppercase tracking-widest text-xs text-[#B79B5E] mb-3">

{item.read}

</p>

<h3 className="font-serif text-2xl mb-4">

{item.title}

</h3>

<p className="text-[#6B6B6B] leading-relaxed">

{item.description}

</p>

<p className="mt-6 text-[#B79B5E]">

Explore →

</p>

</a>

))}

</div>

</section>

<article
id="what-are-spiritual-dreams"
className="max-w-4xl mx-auto px-6 mb-24"
>

<h2 className="font-serif text-4xl mb-8">

What Are Spiritual Dreams?

</h2>

<div className="bg-[#FDFBF7] border border-[#EAE6E1] rounded-2xl p-8 my-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs mb-4">

🌙 ABOUT THESE PERSPECTIVES

</p>

<p className="text-[#555] leading-relaxed">

DreamScriptures explores dream traditions with respect,
historical context and educational intent.

Interpretations vary across cultures, communities,
scholars and individuals, and no single perspective
represents every belief.

Readers are encouraged to approach these traditions
thoughtfully and within their own personal, cultural or
faith context.

</p>

</div>

<div className="space-y-8 text-lg leading-relaxed text-[#444]">

<p>

Throughout history, many people have viewed dreams as experiences that
invite reflection, prayer, contemplation or personal growth. Sacred
texts, religious traditions and spiritual communities have all developed
different ways of understanding dreams and their significance.

</p>

<p>

Some traditions describe dreams as symbolic experiences, some record
dreams involving prophets and important historical figures, while others
emphasize discernment and careful reflection rather than immediate
interpretation.

</p>

<blockquote className="border-l-4 border-[#C6A96B] pl-6 italic text-[#666]">

Dream spirituality explores how different traditions understand dreams
without suggesting that every dream carries the same purpose or meaning.

</blockquote>

<p>

This library presents educational perspectives drawn from biblical,
Islamic and African traditions while encouraging thoughtful reflection,
context and personal understanding.

</p>

</div>

</article>

<section
id="christian-perspectives"
className="max-w-6xl mx-auto px-6 mb-24"
>

<div className="mb-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs">

✝️ CHRISTIAN PERSPECTIVES

</p>

<h2 className="font-serif text-4xl mt-3">

Dreams in the Bible

</h2>

<p className="mt-4 max-w-3xl text-[#6B6B6B]">

The Bible records numerous dreams involving guidance, warning,
encouragement and symbolic imagery. These narratives continue to shape
how many Christians reflect on dreams today.

</p>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

📖

<h3 className="font-serif text-2xl mt-5 mb-4">

Joseph

</h3>

<p className="text-[#6B6B6B]">

Known for interpreting dreams and explaining Pharaoh&apos;s symbolic visions.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

🦁

<h3 className="font-serif text-2xl mt-5 mb-4">

Daniel

</h3>

<p className="text-[#6B6B6B]">

Interpreted dreams and visions within the Babylonian kingdom.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

👑

<h3 className="font-serif text-2xl mt-5 mb-4">

Pharaoh&apos;s Dreams

</h3>

<p className="text-[#6B6B6B]">

Seven cows and seven ears of grain remain among the most recognized
symbolic dreams in biblical literature.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

🌙

<h3 className="font-serif text-2xl mt-5 mb-4">

Jacob&apos;s Ladder

</h3>

<p className="text-[#6B6B6B]">

A dream describing a ladder reaching heaven that became one of the most
famous biblical dream narratives.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

🔮

<h3 className="font-serif text-2xl mt-5 mb-4">

Prophetic Dreams

</h3>

<p className="text-[#6B6B6B]">

Explore dreams understood within Christian traditions as spiritually
significant experiences.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

🙏

<h3 className="font-serif text-2xl mt-5 mb-4">

Discernment & Prayer

</h3>

<p className="text-[#6B6B6B]">

Many Christian traditions encourage prayer, wisdom and discernment
before assigning meaning to dreams.

</p>

</div>

</div>

</section>

<section
id="islamic-perspectives"
className="max-w-6xl mx-auto px-6 mb-24"
>

<div className="mb-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs">

☪️ ISLAMIC PERSPECTIVES

</p>

<h2 className="font-serif text-4xl mt-3">

Dreams in Islamic Tradition

</h2>

<p className="mt-4 max-w-3xl text-[#6B6B6B]">

Islamic scholarship has long explored dreams through classical
literature, reflection and categories of dream experiences.

</p>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

📚

<h3 className="font-serif text-2xl mt-5 mb-4">

Ibn Sirin

</h3>

<p className="text-[#6B6B6B]">

One of the most well-known historical figures associated with Islamic
dream interpretation.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

🌙

<h3 className="font-serif text-2xl mt-5 mb-4">

Good Dreams

</h3>

<p className="text-[#6B6B6B]">

Classical traditions distinguish beneficial dreams from other types of
dream experiences.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

⚠️

<h3 className="font-serif text-2xl mt-5 mb-4">

Nightmares

</h3>

<p className="text-[#6B6B6B]">

Islamic traditions include guidance on responding to disturbing dreams.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

🤲

<h3 className="font-serif text-2xl mt-5 mb-4">

Dream Etiquette

</h3>

<p className="text-[#6B6B6B]">

Classical teachings discuss reflection, privacy and appropriate ways of
sharing dreams.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

📖

<h3 className="font-serif text-2xl mt-5 mb-4">

Quranic Narratives

</h3>

<p className="text-[#6B6B6B]">

Several narratives involving dreams appear within the Quran and Islamic
tradition.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

✨

<h3 className="font-serif text-2xl mt-5 mb-4">

Reflection

</h3>

<p className="text-[#6B6B6B]">

Many scholars emphasize wisdom, context and careful reflection rather
than immediate conclusions.

</p>

</div>

</div>

</section>

<section
id="african-perspectives"
className="max-w-6xl mx-auto px-6 mb-24"
>

<div className="mb-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs">

🌍 AFRICAN PERSPECTIVES

</p>

<h2 className="font-serif text-4xl mt-3">

Dream Traditions Across Africa

</h2>

<p className="mt-4 max-w-3xl text-[#6B6B6B]">

Africa is home to thousands of cultures, languages and
spiritual traditions.

Rather than presenting one African dream interpretation,
this guide explores recurring themes found across
different communities, including community wisdom,
symbolism, ancestral memory and personal reflection.

Many traditions emphasize context, family, storytelling
and lived experience when reflecting on dreams.
</p>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

🌳

<h3 className="font-serif text-xl mt-5 mb-3">

Community Wisdom

</h3>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

🪶

<h3 className="font-serif text-xl mt-5 mb-3">

Ancestor Dreams

</h3>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

🔥

<h3 className="font-serif text-xl mt-5 mb-3">

Traditional Symbolism

</h3>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

🌍

<h3 className="font-serif text-xl mt-5 mb-3">

Modern Perspectives

</h3>

</div>

</div>

</section>

<section className="max-w-6xl mx-auto px-6 mb-24">

<div className="mb-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs">

COMPARE PERSPECTIVES

</p>

<h2 className="font-serif text-4xl mt-3">

Different Approaches To Dreams

</h2>

</div>

<div className="overflow-x-auto">

<table className="w-full bg-white rounded-2xl overflow-hidden">

<thead>

<tr>

<th className="p-5 text-left">

Topic

</th>

<th className="p-5 text-left">

Christian

</th>

<th className="p-5 text-left">

Islamic

</th>

<th className="p-5 text-left">

African

</th>

</tr>

</thead>

<tbody>

<tr>

<td className="p-5">

Purpose

</td>

<td className="p-5">

Reflection & guidance

</td>

<td className="p-5">

Reflection & wisdom

</td>

<td className="p-5">

Community & symbolism

</td>

</tr>

<tr>

<td className="p-5">

Emphasis

</td>

<td className="p-5">

Discernment

</td>

<td className="p-5">

Reflection

</td>

<td className="p-5">

Context

</td>

</tr>

<tr>

<td className="p-5">

Approach

</td>

<td className="p-5">

Prayer & Scripture

</td>

<td className="p-5">

Scholarship & reflection

</td>

<td className="p-5">

Tradition & community

</td>

</tr>

</tbody>

</table>

</div>

</section>

<section
id="bible-references"
className="max-w-6xl mx-auto px-6 mb-24"
>

<div className="mb-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs">

📖 SACRED REFERENCES

</p>

<h2 className="font-serif text-4xl mt-3">

Bible Dream References

</h2>

<p className="mt-4 max-w-3xl text-[#6B6B6B]">

Dreams appear throughout Scripture, often accompanying important
moments, personal journeys and significant historical events.

</p>

</div>

<div className="overflow-x-auto">

<table className="w-full bg-white rounded-2xl overflow-hidden">

<thead>

<tr>

<th className="p-5 text-left">

Figure

</th>

<th className="p-5 text-left">

Reference

</th>

</tr>

</thead>

<tbody>

<tr>

<td className="p-5">

Joseph

</td>

<td className="p-5">

Genesis 37, 40–41

</td>

</tr>

<tr>

<td className="p-5">

Daniel

</td>

<td className="p-5">

Daniel 2, 4 & 7

</td>

</tr>

<tr>

<td className="p-5">

Jacob

</td>

<td className="p-5">

Genesis 28

</td>

</tr>

<tr>

<td className="p-5">

Pharaoh

</td>

<td className="p-5">

Genesis 41

</td>

</tr>

<tr>

<td className="p-5">

Joseph (New Testament)

</td>

<td className="p-5">

Matthew 1–2

</td>

</tr>

<tr>

<td className="p-5">

Wise Men

</td>

<td className="p-5">

Matthew 2:12

</td>

</tr>

</tbody>

</table>

</div>

</section>

<section
id="quran-references"
className="max-w-6xl mx-auto px-6 mb-24"
>

<div className="mb-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs">

☪️ QURANIC REFERENCES

</p>

<h2 className="font-serif text-4xl mt-3">

Dream Narratives in Islamic Tradition

</h2>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<h3 className="font-serif text-2xl mb-4">

Prophet Yusuf

</h3>

<p className="text-[#6B6B6B]">

Surah Yusuf

Dreams and interpretation form a central part of the narrative.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<h3 className="font-serif text-2xl mb-4">

The King&apos;s Dream

</h3>

<p className="text-[#6B6B6B]">

Seven cows and seven ears of grain interpreted by Yusuf.

</p>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-2xl p-8">

<h3 className="font-serif text-2xl mb-4">

Dream Categories

</h3>

<p className="text-[#6B6B6B]">

Classical Islamic scholarship discusses different types of dreams and
their possible origins.

</p>

</div>

</div>

</section>

<section
id="prophetic-figures"
className="max-w-6xl mx-auto px-6 mb-24"
>

<div className="mb-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs">

PROPHETIC FIGURES

</p>

<h2 className="font-serif text-4xl mt-3">

Key Figures Associated With Dreams

</h2>

<p className="mt-5 max-w-3xl text-[#6B6B6B]">

These figures are remembered for receiving,
sharing or interpreting dreams within their
respective traditions and continue to influence
how many people reflect on dreams today.

</p>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5">

<div className="bg-white border border-[#EAE6E1] rounded-xl p-6 text-center">

📖

<h3 className="font-serif text-xl mt-4">

Joseph

</h3>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-xl p-6 text-center">

🦁

<h3 className="font-serif text-xl mt-4">

Daniel

</h3>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-xl p-6 text-center">

🌙

<h3 className="font-serif text-xl mt-4">

Jacob

</h3>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-xl p-6 text-center">

📚

<h3 className="font-serif text-xl mt-4">

Ibn Sirin

</h3>

</div>

<div className="bg-white border border-[#EAE6E1] rounded-xl p-6 text-center">

✨

<h3 className="font-serif text-xl mt-4">

Prophetic Dreams

</h3>

</div>

</div>

</section>

<section className="max-w-5xl mx-auto px-6 mb-24">

<h2 className="font-serif text-4xl mb-10">

Frequently Asked Questions

</h2>

<div className="space-y-5">

<details className="bg-white border border-[#EAE6E1] rounded-xl p-6">

<summary className="cursor-pointer font-serif text-xl">

What are spiritual dreams?

</summary>

<p className="mt-4 text-[#6B6B6B]">

Many traditions understand spiritual dreams as experiences that invite
reflection, contemplation or personal growth, although interpretations
vary widely.

</p>

</details>

<details className="bg-white border border-[#EAE6E1] rounded-xl p-6">

<summary className="cursor-pointer font-serif text-xl">

Does the Bible mention dreams?

</summary>

<p className="mt-4 text-[#6B6B6B]">

Yes. Dreams appear throughout Scripture in narratives involving Joseph,
Daniel, Jacob, Pharaoh and several New Testament accounts.

</p>

</details>

<details className="bg-white border border-[#EAE6E1] rounded-xl p-6">

<summary className="cursor-pointer font-serif text-xl">

Does Islam discuss dreams?

</summary>

<p className="mt-4 text-[#6B6B6B]">

Yes. Dreams appear in the Quran and classical Islamic scholarship,
including the story of Prophet Yusuf and the writings traditionally
associated with Ibn Sirin.

</p>

</details>

<details className="bg-white border border-[#EAE6E1] rounded-xl p-6">

<summary className="cursor-pointer font-serif text-xl">

Do different cultures understand dreams differently?

</summary>

<p className="mt-4 text-[#6B6B6B]">

Yes. Spiritual and cultural traditions have developed diverse approaches
to dreams, symbolism and reflection across history.

</p>

</details>

<details className="bg-white border border-[#EAE6E1] rounded-xl p-6">

<summary className="cursor-pointer font-serif text-xl">

What are prophetic dreams?

</summary>

<p className="mt-4 text-[#6B6B6B]">

Many religious and spiritual traditions describe prophetic dreams as
dreams believed to carry guidance, warning or insight. Different
communities understand these experiences in different ways, and there is
no single interpretation shared by all traditions.

</p>

</details>

<details className="bg-white border border-[#EAE6E1] rounded-xl p-6">

<summary className="cursor-pointer font-serif text-xl">

Should every dream be interpreted spiritually?

</summary>

<p className="mt-4 text-[#6B6B6B]">

Not necessarily. Many traditions encourage reflection, prayer and
discernment rather than assuming every dream carries spiritual meaning.
Dreams may also reflect emotions, memories, daily experiences or
personal concerns.

</p>

</details>

<details className="bg-white border border-[#EAE6E1] rounded-xl p-6">

<summary className="cursor-pointer font-serif text-xl">

Can dreams have personal meaning without being prophetic?

</summary>

<p className="mt-4 text-[#6B6B6B]">

Yes. Many people understand dreams as opportunities for self-reflection,
emotional processing or personal growth without viewing them as
prophetic experiences.

</p>

</details>

<details className="bg-white border border-[#EAE6E1] rounded-xl p-6">

<summary className="cursor-pointer font-serif text-xl">

Why do dream interpretations differ across traditions?

</summary>

<p className="mt-4 text-[#6B6B6B]">

Dream traditions developed within different cultures, histories and
belief systems. As a result, the same symbol may be understood in
different ways depending on context and tradition.

</p>

</details>

</div>

</section>

<section className="max-w-5xl mx-auto px-6 mb-24">

<div className="bg-[#FDFBF7] border border-[#EAE6E1] rounded-3xl p-10">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs mb-4">

🌙 REFLECTION CORNER

</p>

<h2 className="font-serif text-4xl mb-8">

Pause & Reflect

</h2>

<p className="text-lg text-[#555] leading-relaxed mb-8">

Across many spiritual traditions, dreams are approached with humility,
reflection and patience rather than immediate certainty. Before seeking
an interpretation, it can be helpful to simply notice what stayed with
you.

</p>

<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white rounded-2xl border border-[#EAE6E1] p-6">

✨

<h3 className="font-serif text-xl mt-4 mb-3">

What emotions remained after waking?

</h3>

</div>

<div className="bg-white rounded-2xl border border-[#EAE6E1] p-6">

🌙

<h3 className="font-serif text-xl mt-4 mb-3">

Which symbols or people stood out most clearly?

</h3>

</div>

<div className="bg-white rounded-2xl border border-[#EAE6E1] p-6">

🙏

<h3 className="font-serif text-xl mt-4 mb-3">

Would prayer, meditation or journaling help you explore the dream?

</h3>

</div>

<div className="bg-white rounded-2xl border border-[#EAE6E1] p-6">

📖

<h3 className="font-serif text-xl mt-4 mb-3">

Could the dream relate to your current experiences or personal growth?

</h3>

</div>

</div>

</div>

</section>

<section className="max-w-6xl mx-auto px-6 mb-24">

<div className="text-center mb-12">

<p className="uppercase tracking-[0.2em] text-[#B79B5E] text-xs mb-3">

KEEP EXPLORING

</p>

<h2 className="font-serif text-5xl">

Explore More Dream Perspectives

</h2>

</div>

<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<Link
href="/guides/history-culture"
className="bg-white border border-[#EAE6E1] rounded-2xl p-8"
>

🌍

<h3 className="font-serif text-2xl mt-4">

History & Culture

</h3>

</Link>

<Link
href="/guides/psychology"
className="bg-white border border-[#EAE6E1] rounded-2xl p-8"
>

🧠

<h3 className="font-serif text-2xl mt-4">

Psychology

</h3>

</Link>

<Link
href="/guides/science"
className="bg-white border border-[#EAE6E1] rounded-2xl p-8"
>

🔬

<h3 className="font-serif text-2xl mt-4">

Science

</h3>

</Link>

<Link
href="/guides/interpretation"
className="bg-white border border-[#EAE6E1] rounded-2xl p-8"
>

🔍

<h3 className="font-serif text-2xl mt-4">

Interpretation

</h3>

</Link>

</div>

</section>

<SiteFooter/>

</main>

)

}