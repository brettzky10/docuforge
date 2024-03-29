//import { SubscriptionModalProvider } from '@/lib/providers/subscription-modal-provider';
//import { getActiveProductsWithPrice } from '@/lib/supabase/queries';
import React from 'react'

interface DashboardLayoutProps {
    children: React.ReactNode;
    params: any;
  }
  
  const DashboardLayout: React.FC<DashboardLayoutProps> = async ({ children, params }) => {
    //const { data: products, error } = await getActiveProductsWithPrice();
    //if (error) throw new Error();
    return (
        <main className="flex over-hidden h-screen">
        {/*<SubscriptionModalProvider products={products}>*/}
          {children}
        {/*</SubscriptionModalProvider> */}
      </main>
  )
}

export default DashboardLayout