type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

export const Status = (props: StatusProps) => {

    let message
    if (props.status === 'loading') {
        message = 'loading'
    }

  return (
    <div>Status</div>
  )
}

