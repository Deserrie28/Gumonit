import React, { useState } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import Collapsible from 'react-native-collapsible';

const CollapsibleExample = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  return (
    <>
      <TouchableOpacity onPress={() => setIsCollapsed(!isCollapsed)}>
        <Text>Show Image</Text>
      </TouchableOpacity>
      <Collapsible collapsed={isCollapsed}>
 
        <Image
          source={{uri: 'https://www.tvstoreonline.com/cdn/shop/articles/tweet-this-21-facts-you-never-knew-about-looney-tune-s-tweety-bird-tvstoreonline.jpg?v=1661283786&width=700'}}
          style={{width: 100, height: 100}}
        />
      </Collapsible>
    </>
  );
};

export default CollapsibleExample;
