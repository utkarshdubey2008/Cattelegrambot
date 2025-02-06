import BookCard from "./BookCard";

const books = [
  {
      id: 1,
          title: "THE GLOWUP MASTERY GUIDE",
              author: "TheSmartStoriesYT",
                  description:
                        "A comprehensive guide to mastering self-discipline and communication skills. Learn the most valuable life lessons to transform your habits and mindset!",
                            originalPrice: 2150,
                                currentPrice: 299,
                                    image: "https://envs.sh/OaB.jpg",
                                        backCover: "https://envs.sh/OaW.jpg",
                                            type: "Life Changing Guide",
                                                specialOffer: "Includes monthly updates at no extra cost!",
                                                  },
                                                    {
                                                        id: 2,
                                                            title: "THE ULTIMATE INSTAGRAM GROWTH GUIDE",
                                                                author: "eBookStore",
                                                                    description:
                                                                          "I break down the exact strategies I used to grow my Instagram from 1,150 to 200,000 followers in just 30 days! Learn how to optimize your profile, create viral content, and master the Instagram algorithm.",
                                                                              originalPrice: 4150,
                                                                                  currentPrice: 199,
                                                                                      image: "https://envs.sh/OaS.jpg",
                                                                                          backCover: "https://envs.sh/OaS.jpg",
                                                                                              type: "Growth Strategy Revealed",
                                                                                                  specialOffer: "Includes monthly updates at no extra cost!",
                                                                                                    },
                                                                                                      {
                                                                                                          id: 3,
                                                                                                              title: "PRO GROWTH BUNDLE",
                                                                                                                  author: "Digital Creator Hub",
                                                                                                                      description:
                                                                                                                            "Are you a passionate Video Editor or aspiring to become one? Then you're at the right place. Get over 130 GB of video editing assets, including transitions, overlays, fonts, FX, premade templates, and premium software like Premiere Pro, After Effects, and six additional Adobe products. On top of that, get the best premium video editing courses to get you started.",
                                                                                                                                originalPrice: 9999,
                                                                                                                                    currentPrice: 199,
                                                                                                                                        image: "https://envs.sh/mA8.jpg",
                                                                                                                                            backCover: "https://envs.sh/mA8.jpg",
                                                                                                                                                type: "Ultimate Digital Products Bundle",
                                                                                                                                                    specialOffer: "⚡ Get Everything at ₹199",
                                                                                                                                                      },
                                                                                                                                                      ];

                                                                                                                                                      export default function FeaturedBooks() {
                                                                                                                                                        return (
                                                                                                                                                            <section className="bg-gray-100 py-16">
                                                                                                                                                                  <div className="container mx-auto px-4">
                                                                                                                                                                          <h2 className="text-3xl font-bold mb-8 text-center">Featured eBooks</h2>
                                                                                                                                                                                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                                                                                                                                                                                            {books.map((book) => (
                                                                                                                                                                                                        <BookCard key={book.id} book={book} />
                                                                                                                                                                                                                  ))}
                                                                                                                                                                                                                          </div>
                                                                                                                                                                                                                                </div>
                                                                                                                                                                                                                                    </section>
                                                                                                                                                                                                                                      );
                                                                                                                                                                                                                                      }

