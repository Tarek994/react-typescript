type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {

    let message
    if (props.status === 'loading') {
        message = 'loading'
    }else if (props.status === 'success') {
        message = 'Data fetched successfully!'
    }

  return (
    <div>Status</div>
  )
}

