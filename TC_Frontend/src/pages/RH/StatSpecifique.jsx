import React from 'react'

function StatSpecifique() {
    const fetchStates= async ()=>{

        try{

                const response = await fetch("")
                const data = await response.json()
                console.log("Fetched Stats:", data)
                return data

        }
        catch (error)
        {
                console.error("err fetching states ",error)
                return null

        }
    }
    const handleMissingData = (data) => {
        if (!data || data.length === 0) {
          console.warn("No data available.")
          return []
        }
        return data
      }
  return (
    <div>StatSpecifique</div>
  )
}

export default StatSpecifique