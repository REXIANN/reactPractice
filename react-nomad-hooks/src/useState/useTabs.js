import React from 'react'

const content = [
  {
    tab: 'section 1',
    content: ' content of the section 1'
  },
  {
    tab: 'section 2',
    content: ' content of the section 2'
  },
]

const useTabs = (initialTab, allTabs) => {
  if (!allTabs || Array.isArray(allTabs)) {
    return 
  }

  const [ currentIndex, setCurentIndex ] = useState(initialTab)
  
  return {
    currentItem: allTabs[currentIndex],
     changeItem: setCurentIndex
  }

}

const UseTabsComponent = () => {
  const { currentItem, changeItem } = useTabs(0, content)

  return (
    <div>
      {content.map((section, index) => (
        <button onClick={ () => changeItem(index) } key={section.tab} >{section.tab}</button>
      ))}
      <div>
        {currentItem.content}
      </div>
    </div>
  )
}

export default UseTabsComponent