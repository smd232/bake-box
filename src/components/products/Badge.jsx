function Badge(props) {
  const style = props.text === 'New' ? 'badge badge-new' : 'badge badge-bestseller'

  return <span className={style}>{props.text}</span>
}

export default Badge