

function Contacts() {
  return (
    <div className="contacts" />
  )
}

function Chat() {
  return (
    <div className="chat" />
  )
}
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>

    </div>
  )
}

function MainPane() {
  return (
    <SplitPane left={<Contacts />} right={<Chat />} />
  )
}

export default MainPane