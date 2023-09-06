type StatusProps = {
    statusType: 'loading' | 'success' | 'error' // union of string literals
}

const Status = (props: StatusProps) => {
    let statusMsg;
    if (props.statusType === 'loading') {
        statusMsg = 'Loading';
    } else if(props.statusType === 'success') {
        statusMsg = 'Data Fetched Successfully'
    } else if(props.statusType === 'error') {
        statusMsg = 'Error occurred while fetching data'
    }
  return (
      <div>
          <h3>{statusMsg}</h3>
      </div>
  )
}

export default Status;