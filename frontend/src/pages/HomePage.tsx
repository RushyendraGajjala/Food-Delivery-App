import Landingimage from "../assets/landing.png";
import AppDownloadImage from "../assets/appDownload.png";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-12">
        <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
            <h1 className="text-2xl font-bold tracking-tight text-orange-600">
                Enjoy a delicious takeaway today
            </h1>
            <span className="text-lg">Food is just a Click away!</span>
            {/* <SearchBar placeHolder="Search by City or Town" onSubmit={handleSearchSubmit}/> */}
        </div>
        <div className="grid md:grid-cols-2 gap-5">
            <img src={Landingimage} />
            <div className="flex flex-col items-center justify-center gap-4 text-center">
                <span className="font-bold text-3xl tracking-tighter">
                    Order takeaway even faster!
                </span>
                <span>
                    Download the PuEats App for faster ordering and personalised recommendations
                </span>
                <img src={AppDownloadImage} />
            </div>
        </div>
    </div>
  )
}
