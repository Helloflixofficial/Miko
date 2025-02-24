import React from 'react'

const Searchbar = () => {
    return (
        <form className="flex w-full max-w-[600px]">
            <div className='relative w-full'>
                <input type="text" placeholder='Search here' className='w-full pl-4 py-2 pr-12 rounded-l-full border focus:outline-none focus:border-blue-500' />
            </div>
        </form>
    )
}

export default Searchbar