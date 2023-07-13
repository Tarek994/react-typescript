type ListProps = {
    items: string[]
    onClick: (value: string) => void
}

export const List = ({items, onClick}: ListProps) => {
  return (
    <div>List</div>
  )
}
