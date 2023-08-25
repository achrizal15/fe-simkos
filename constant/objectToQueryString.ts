function objectToQueryString(obj: Record<string, any>): string {
    const queryString = Object.keys(obj)
      .filter(key => obj[key] !== undefined)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(obj[key])}`)
      .join('&');
  
    return queryString;
  }
  export default objectToQueryString