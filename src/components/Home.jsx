import image from '../images/promotional-0.jpg'

const Home = () => {
  return (
    <div>
      <div className="my-0 py-0 px-0 mx-0 min-h-screen bg-white flex justify-center items-center">
        <div className="container flex justify-center p-0 m-0">
          <div className="max-w-sm">
            <div className="bg-blue-700 relative shadow-lg hover:shadow-xl transition duration-500">
              <img className="rounded-br-lg rounded-bl-lg h-[26rem] md:h-96 lg:h-96 w-full" src={image} alt="love-box" />
              <div className="py-6 px-8 bg-blue-700">
                <h1 className="text-gray-100 font-bold text-2xl mb-3  hover:cursor-pointer">Join the Elite: Learn from the best in the business</h1>
                <p className="text-gray-100 tracking-wide text-center">Future-Proof Your Tech Skills From A Top-tier Tech Training Institute</p>
                <a href="https://wa.me/message/N7RLKYVMOWZSN1" className="mt-6 py-2 px-4 block bg-white text-red-700 font-bold rounded-lg shadow-md hover:shadow-lg transition duration-300 text-center">Click here</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
