const isMonotonic=a=> {

    // 1st is right lower than left, progressively getting lower 
    // ie. decreasing
    
    // 2nd is right greater  than left, progressively getting higher
    // ie. increasing
    return a.every((x,i)=>(i===0)||(x<=a[i-1])) ||  a.every((x,i)=>(i===0)||(x>=a[i-1]))
}