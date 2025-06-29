import React, { useState, type ReactNode } from 'react'

type TabsProps = {
    children:ReactNode;
}

const Tabs = ({children}: TabsProps) => {
    const [activeTab,setActiveTab]=useState(0);
  return (
    <>
    <div className='tabs-header'>
        {
            React.Children.map(children,(child,index)=>{
                if(React.isValidElement<{label:string}>(child)){
                  return (
                    <div className={`tab-${activeTab===index?"active":""}`} onClick={()=>{
                        setActiveTab(index)
                    }}>
                      {child.props.label}
                    </div>
                  )
                }
            })
        }      
    </div>
            <div className="tab-content">
        {React.Children.map(children, (child, index) => {
          if (index === activeTab) {
            return <>{child}</>;
          }
        })}
      </div>
      </>
  )
}


export default Tabs

type TabProps ={
    label:string,
    children:ReactNode,
}


export const Tab: React.FC<TabProps> = ({ children }) => {
  return <>{children}</>;
};

