import React, { useEffect } from 'react'
import { mdiStar } from '@mdi/js'
import { mdiStarOutline } from '@mdi/js'
import Icon from '@mdi/react'
import _ from 'lodash'

const Airline = (props ) => {

const	{ airline } = props
	let stars = _.range(1,6,1)
	const rating = 3

  return (
    <div className="airlineCard">
			<img className="imgContainer" src={airline?.image_url} alt="airline logo" />
			<span>{airline?.name}</span>
			<div className='starLine'>
				{stars && stars.map(star => (
					<Icon key={star}
						path={star <= rating ? mdiStar : mdiStarOutline}
						size={1.5}
						color="white" />
				))}
			</div>
		</div>
  )
}

export default Airline
