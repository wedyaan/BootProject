export default function Stores() {
  return (
    <div>
      <div className="grid justify-center items-center pt-24 pb-24 text-5xl">
        <h1>Eco-Friendly Online Stores </h1>
      </div>

      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
        {/* <!--Card 1--> */}
        <div className="rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://earthhero.com/cdn/shop/files/kitchen_desktop_1400x.png?v=1672170644"
            alt="store"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">EarthHero</div>
            <p className="text-gray-700 text-base">
              The Boulder, Colorado store stocks over 150 brands that were all
              intimately hand-picked to ensure they’re the cream of the
              sustainable crop.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a
              target="_blank"
              href="https://earthhero.com/?utm_source=awin&utm_medium=Sustainable+Jungle&awc=23846_1694272124_b7c516de911a87ec7f798907c7f21be7"
              className="inline-block bg-[#76C893] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              Go To Store
            </a>
          </div>
        </div>
        {/* <!--Card 2--> */}
        <div className="rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://cdn11.bigcommerce.com/s-j602wc6a/images/stencil/original/carousel/159/natural-cedar-home-feature2__36086.jpg?c=2"
            alt="store"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Eartheasy</div>
            <p className="text-gray-700 text-base">
              Sustainable living is about respecting the limits of the earth's
              capacity to provide. We look for solutions that lead to a simpler,
              more self-sufficient way of living. At Eartheasy, we believe we
              can enrich our lives and ensure a healthy future while also
              reducing our impact on the environment.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a
              target="_blank"
              href="https://eartheasy.com/"
              className="inline-block bg-[#76C893] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              Go To Store
            </a>
          </div>
        </div>

        {/* <!--Card 3--> */}
        <div className="rounded overflow-hidden shadow-lg">
          <img
            className="w-full object-cover p-2 border rounded"
            src="https://www.greenerchoices.org/wp-content/uploads/2020/11/Ecoroots.us_.png"
            alt="store"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">EcoRoots</div>
            <p className="text-gray-700 text-base">
              Here at EcoRoots, we’re on an endless mission to provide you with
              the best eco-friendly and low-waste products out there. Our
              products are kindly made for every person, every body, every
              identity.
            </p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <a
              target="_blank"
              href="https://ecoroots.us/?sscid=91k7_aqqun"
              className="inline-block bg-[#76C893] rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            >
              Go To Store
            </a>
          </div>
          
        </div>
      </div>
    </div>
  );
}
