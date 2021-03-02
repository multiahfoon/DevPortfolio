import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import DevCard from '../DevCard'
import { getWeb } from './webHelper'

function Web ({ web }) {
  useEffect(() => {
    getWeb()
  }, [])

  return (
    <>
      <div className=" w-full grid xl:grid-cols-4 lg:grid-cols-3 gap-4 gap-x-4 rounded-md lg:px-6 xl:px-10">
        {
          web.map(dev => {
            return (
              <DevCard key={dev.id} dev={dev} />
            )
          })
        }
      </div>
    </>
  )
}

function mapStateToProps (state) {
  return {
    web: state.web
  }
}

export default connect(mapStateToProps)(Web)
