// app/books/page.tsx
import Image from "next/image";

const books = [
  {
    id: 1,
    title: "MANNA",
    subtitle:
      "A Quiet Daily Walk With God: Discovering Joy, Peace, and Purpose One Day at a Time",
    image: "/images/books/manna%20(1).png",
    description:
      "In a world full of noise, pressure, and distractions, Manna offers a gentle invitation to pause and reconnect with God daily.\n\nThis devotional is designed to help you start each day with a moment of peace, reflection, and faith. Each entry provides a Scripture, a short meditation, and a practical encouragement to apply God’s Word to real-life moments.\n\nWhether you are beginning your spiritual journey or seeking a deeper daily rhythm with God, Manna will nourish your soul and strengthen your walk.",
    amazonUrl:
      "https://www.amazon.com/dp/B0FZ54SWPY",
  },
  {
    id: 2,
    title: "FULFILLMENT",
    subtitle:
      "Discovering God's Purpose: Connecting Your Gifts, Passion, and Calling",
    image: "/images/books/fulfillment.png",
    description:
      "Many people live life busy, successful, and even respected… yet still feel empty inside.\n\nFulfillment is a powerful guide that helps you uncover the deeper reason you were created. This book explores how God’s purpose is tied to your gifts, passion, and spiritual assignment.\n\nThrough biblical principles and practical insight, you will learn how to stop surviving and start living in divine alignment.\n\nIf you are tired of “doing life” without meaning, Fulfillment will awaken the purpose inside you.",
    amazonUrl:
      "https://www.amazon.com/dp/1533562296",
  },
  {
    id: 3,
    title: "THE FATHER'S HEART",
    subtitle: "Experiencing God's Love Beyond Religion",
    image: "/images/books/the-father-heart.png",
    description:
      "Many believers know God as Judge, King, or Provider… but struggle to truly know Him as Father.\n\nThe Father’s Heart takes you on a healing journey into the love of God that transforms identity, restores confidence, and breaks religious fear.\n\nThis book helps you move beyond performance-based Christianity into a real relationship with God.\n\nIf you’ve ever felt unworthy, distant, or unsure of God’s love, this book will introduce you to the Father who has been waiting for you.",
    amazonUrl:
      "https://www.amazon.com/dp/B09QL9VYZK",
  },
  {
    id: 4,
    title: "ONE FLESH",
    subtitle: "Building Kingdom Marriages That Last",
    image: "/images/books/one-flesh.png",
    description:
      "Marriage is more than romance. It is covenant.\n\nOne Flesh is a faith-based guide for couples who want to build marriages rooted in God’s design, not culture’s confusion.\n\nThis book explores the spiritual meaning of becoming one, the challenges that attack unity, and how to build lasting love through understanding, communication, prayer, and commitment.\n\nWhether you are engaged, newly married, or rebuilding after conflict, One Flesh will strengthen your foundation and help you build a marriage that lasts.",
    amazonUrl:
      "https://www.amazon.com/dp/B01HHI01WO",
  },
  {
    id: 5,
    title: "SURVIVOR",
    subtitle: "Turning Pain Into Purpose",
    image: "/images/books/survivor.png",
    description:
      "Life can hit hard. Some wounds are visible, others are silent.\n\nSurvivor is a powerful message of hope for anyone who has endured loss, rejection, betrayal, trauma, or deep disappointment.\n\nThis book reveals how God can take what tried to destroy you and turn it into testimony, strength, and purpose.\n\nYou are not just alive. You are a survivor—and your story still matters.",
    amazonUrl:
      "https://www.amazon.com/dp/B08CW9LVPG",
  },
  {
    id: 6,
    title: "THE BLESSING",
    subtitle: "Unlocking the Power of Divine Favor",
    image: "/images/books/the-blessing.png",
    description:
      "The Blessing is more than money. It is empowerment.\n\nIn The Blessing, you will discover what Scripture truly says about favor, increase, and divine advantage.\n\nThis book shows that God’s blessing is not random—it is covenant-based and connected to obedience, faith, and spiritual alignment.\n\nYou will learn:\n\nHow the blessing works\nWhat blocks the blessing\nHow to position yourself for favor\nHow to maintain the blessing without losing your soul\n\nIf you’ve ever wondered why some people seem to rise no matter what, this book will open your eyes to the power behind divine favor.",
    amazonUrl:
      "https://www.amazon.com/dp/B09XT3H92F",
  },
  {
    id: 7,
    title: "THE POTTER'S TOUCH",
    subtitle: "Allowing God to Shape Your Destiny",
    image: "/images/books/the-potter-touch.png",
    description:
      "Some seasons feel like breaking. But God often uses pressure to form purpose.\n\nThe Potter’s Touch is a deep, faith-building book that helps you understand the process of divine shaping.\n\nUsing the powerful imagery of the potter and clay, this book reveals how God molds character, prepares destiny, and rebuilds broken areas of life.\n\nIf you are in a season of confusion, delay, or transformation, this book will help you embrace the process and trust the hands that are shaping you.",
    amazonUrl:
      "https://www.amazon.com/dp/B0CLGT6QBR",
  },
  {
    id: 8,
    title: "INSPIRE",
    subtitle: "Empowering Young Minds Through Faith and Purpose",
    image: "/images/books/inspire.png",
    description:
      "Young people today are growing up in a world full of pressure, confusion, and identity battles.\n\nINSPIRE is a motivational and faith-based book designed to empower teens and young adults to discover their worth, develop confidence, and live with purpose.\n\nThis book encourages readers to rise above negative influences and embrace their God-given potential.\n\nIf you want to speak life into the next generation, INSPIRE is a powerful tool for mentoring, teaching, and building destiny.",
    amazonUrl:
      "https://www.amazon.com/dp/B0CQW6NFM5",
  },
  {
    id: 9,
    title: "BOUNCE BACK",
    subtitle: "Lessons from Esau’s Comeback Story",
    image: "/images/books/bounce-back.png",
    description:
      "Failure does not have the final word.\n\nBounce Back is a powerful book that reveals how God can restore what you lost, redeem what went wrong, and reposition you for a comeback.\n\nUsing the story of Esau as a central lesson, this book explores:\n\nHow mistakes happen\nHow to recover with wisdom\nHow to regain confidence and direction\nHow to build a stronger future after disappointment\n\nIf you’ve ever felt like you missed your moment, Bounce Back will show you that God still has a plan—and you can rise again.",
    amazonUrl:
      "https://www.amazon.com/dp/B0CS372485",
  },
  {
    id: 10,
    title: "THE FAITH WALKERS",
    subtitle: "Walking by Faith and Not by Sight",
    image: "/images/books/faith-walker.png",
    description:
      "Faith is not a feeling. It is a walk.\n\nThe Faith Walkers is a powerful guide for believers who want to live beyond fear, doubt, and uncertainty.\n\nThis book teaches what it means to walk by faith and not by sight—especially when life is unclear.\n\nThrough Scripture, insight, and practical examples, you will learn how to strengthen your faith, trust God’s process, and move forward with confidence.\n\nIf you are ready to stop waiting for perfect conditions and start walking with God boldly, this book is for you.",
    amazonUrl:
      "https://www.amazon.com/dp/B0DXL4KRMS",
  },
];

export default function BooksPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-white">
      <section className="mx-auto max-w-[1240px] px-6 py-12">
        <div className="rounded-[40px] border border-white/10 bg-white/5 p-8 md:p-12">
          <p className="text-[11px] tracking-[0.28em] text-white/55">BOOKS</p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">
            Books
            <span className="block text-white/65">
              writing with purpose, clarity, and impact.
            </span>
          </h1>

          <p className="mt-5 max-w-3xl text-sm leading-relaxed text-white/70 md:text-base">
            Here are my published works with direct Amazon links.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {books.map((b) => (
              <article
                key={b.id}
                className="group rounded-[28px] border border-white/10 bg-neutral-950/60 p-6 transition hover:border-white/20"
              >
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                  <div className="aspect-[3/4] w-full" />
                  <Image
                    src={b.image}
                    alt={`${b.title} cover`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    priority={b.id <= 3}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-neutral-950/25 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />
                </div>

                <div className="mt-5">
                  <h2 className="text-lg font-semibold text-amber-200 tracking-wide">{b.title}</h2>
                  {b.subtitle ? (
                    <div className="mt-1 text-xs text-white/55">{b.subtitle}</div>
                  ) : null}
                  <p className="mt-3 whitespace-pre-line text-sm leading-relaxed text-white/70">
                    {b.description}
                  </p>
                </div>

                <div className="mt-5 flex items-center gap-3">
                  <a
                    href={b.amazonUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-amber-200 px-5 py-2.5 text-sm font-medium text-neutral-950 transition hover:opacity-90"
                  >
                    Buy Now
                  </a>
                  <span className="text-xs text-white/45">Amazon</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
