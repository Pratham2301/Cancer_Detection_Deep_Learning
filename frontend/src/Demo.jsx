import React, { useState } from 'react'
import axios from 'axios'
import howitworks from './assets/working.svg'

// import dotenv from 'dotenv'
// dotenv.config()

// const axios = require("axios").default;

// headers: {
//   "Content-Type": "application/json",
//   Accept: "application/json",
//   "Access-Control-Allow-Origin": "*",
// },

function Demo () {
  const [selectedFile, setSelectedFile] = useState()
  // const axios = require("axios").default;
  const [preview, setPreview] = useState()
  const [data, setData] = useState()
  const [image, setImage] = useState(false)
  const [isLoading, setIsloading] = useState(false)
  const [file, setFile] = useState()
  var [confidence, setconfidence] = useState('')
  var [label, setlabel] = useState('')
  function SetConfidence (props) {
    setconfidence(props)
  }

  function handleChange (e) {
    // console.log(e.target.files);
    setFile(URL.createObjectURL(e.target.files[0]))
    setImage(true)
    setSelectedFile(e.target.files[0])
    setData(undefined)
  }

  const sendFile = async () => {
    // alert('CALLED')
    if (image) {
      console.log(selectedFile)

      let formData = new FormData()
      formData.append('file', selectedFile)
      console.log(_VALUE_)

      let res = await axios({
        method: 'POST',
        url: _VALUE_,
        // url: "http://localhost:8000/predict",
        // url: "https://us-central1-cancer-detection-deep-learning.cloudfunctions.net/predict",
        data: formData
      })

      console.log(res.data.class)
      console.log(res.data.confidence)

      if (res.status === 200) {
        console.log('res.data = ', res.data)
        console.log('data = ', data)

        setlabel(res.data.class)
        confidence = parseFloat(res.data.confidence).toFixed(2)
        SetConfidence(confidence)

        console.log('new res.data = ', res.data)
        console.log('new data = ', data)
        console.log('new label = ', label)
        console.log('new confidence = ', confidence)
      }

      setIsloading(false)
    }
  }

  return (
    <div id='demo' style={{ 'min-height': '100vh' }}>
      <div className='flex justify-center font-Rowdies '>
        <h1 className='font-Rowdies text-3xl md:text:4xl lg:text-4xl text-gray-700 mt-5 mb-5'>
          <center>Demo</center>
        </h1>
      </div>

      <div className='ml-0 md:mx-auto rounded-xl mb-14 w-10/12  mt-5  bg-bluedark justify-center  card flex flex-col md:flex-row mx-auto overflow-hidden items-center'>
        <div data-aos='fade-up-right' className='w-6/12 flex justify-center'>
          <div className='mx-auto w-full mt-14'>
            {/* ...................... */}
            <h2 className=' font-mavenpro text-xl text-gray-600 font-black'>
              Choose {'  '}
              <span className='   font-mavenpro text-2xl text-orange-300 font-black'>
                Image
              </span>
              :
            </h2>
            <br />
            <div className=' mt-5 mb-10'>
              <input
                type='file'
                onChange={handleChange}
                className='  file:mr-4 file:py-2 file:px-4
      file:rounded-full file:border-0
      file:text-sm file:font-semibold
      file:bg-gradient-to-r from-orange-400 to-yellow-400  file:text-gray-600 hover:file:cursor-pointer hover:file:opacity-80
 hover:file:text-amber-700  hover:file:bg-orange-900'
              />
            </div>
            <img
              className='mx-auto  shadow-lg rounded-lg w-5/5 md:w-6/12'
              src={file}
            />
            <div className='mx-auto'>
              <button
                onClick={sendFile}
                type='button'
                className='text-white bg-blue-500 hover:bg-blue-800 h-7 w-20  mt-5 mb-4 font-medium rounded-lg text-sm   '
              >
                Predict
              </button>
            </div>

            {/* .......................... */}
          </div>
        </div>
        <div
          data-aos='fade-up-left'
          className='card-details  h-fit mx-5 md:mx-10  md:w-4/12 grid content-center my-5 sm:my-7 md:my-10'
        >
          <div className='  font-Kanit   '>
            <div className='  justify-center md:block'>
              <h1 className=' mx-auto  md:mx-0 font-Rowdies text-gray-700  text-2xl md:text-4xl lg:text-4xl my-3'>
                <span className='italic text-blue-500'>Result</span>
              </h1>

              <div className='mt-5'>
                <h1 className='font-Adventpro text-lg md:text-xl'>
                  Label : {label}
                </h1>

                <h1 className='font-Adventpro text-lg md:text-xl'>
                  Confidence : {confidence}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Demo
