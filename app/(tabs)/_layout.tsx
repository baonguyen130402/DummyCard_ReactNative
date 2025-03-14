import React from 'react';
import { Tabs } from 'expo-router';

import TabBar from '@/components/TabBar';

export default function TabLayout() {
  return (
    <Tabs tabBar={props => <TabBar {...props} />}>
      <Tabs.Screen name="products" options={{title: 'Products'}}/>
      <Tabs.Screen name="index" options={{title: 'Users'}}/>
      <Tabs.Screen name="recipes" options={{title: 'Recipes'}}/>
    </Tabs>
  );
}
