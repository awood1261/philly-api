const withLookupResult = (Component) => (props) => 
    !props.result
        ? null
        : <Component {...props} />

const withLookupLoadingIndicator = (Component) => (isLoadingResult, ...others) =>
    isLoadingResult
        ? <div>Loading Result</div>
        : <Component {...others} /> 