import { useState } from "react"


const TypeaheadSearchBox = ({data}:any) =>{
    const [query,setQuery] = useState("")
    const [filteredData,setFilteredData] = useState([])
    const [showSuggestions,setShowSuggestions] =  useState(false)
    // console.log(filteredData)

    
    const handleOnChange = (e:any) => {
        const value = e.target.value
        setQuery(value)

        if(value.length>0){
           let filterEle = data.filter((ele:any)=> ele.toLowerCase().includes(value.toLowerCase()))
           setFilteredData(filterEle)
           setShowSuggestions(true)
        }else{
            setShowSuggestions(false)
        }

    }

    const handleClick = (ele:any) =>{
        console.log("ele",ele)
       setQuery(ele)
       setShowSuggestions(false)

    }

      return(
        <div>
        <input
        type="text"
        value={query}
        placeholder="Search..."
        onChange={handleOnChange}
        />

        {showSuggestions && (
            <ul>
                {filteredData.map((ele,index)=>{
                    return(
                        <li key={index} onClick={()=>handleClick(ele)}>{ele}</li>
                    )
                })}
            </ul>
        )}

</div>
      )
}

export default TypeaheadSearchBox
