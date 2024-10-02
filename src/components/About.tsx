import React from 'react'
import { Tabs } from './ui/Tabs'

const About = () => {
  const tabs = [
    {
      title: 'Tab 1',
      value: 'tab1',
      content: (
        <div>
          <h2>Tab 1 Content</h2>
          <p>This is the content for Tab 1.</p>
        </div>
      )
    },
    {
      title: 'Tab 2',
      value: 'tab2',
      content: (
        <div>
          <h2>Tab 2 Content</h2>
          <p>This is the content for Tab 2.</p>
        </div>
      )
    },
    {
      title: 'Tab 3',
      value: 'tab3',
      content: (
        <div>
          <h2>Tab 3 Content</h2>
          <p>This is the content for Tab 3.</p>
        </div>
      )
    }
  ];
  
  // Usage in the component
  return (
    <Tabs tabs={tabs} />
  );
  return (
    <div>
      <h1>Thia are the about page click and see What you want to know about us </h1>
      <Tabs
      tabs={tabs}
      containerClassName='bg-white'
      activeTabClassName='bg-blue-500'
      tabClassName='bg-black'
      contentClassName='bg-red-500'
      />
    </div>
  )
}

export default About
