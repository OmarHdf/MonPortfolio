import dynamic from 'next/dynamic';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from '@/components/ui/resizable';
import Sidebar from '@/components/layout/sidebar';

const LinesNumber = dynamic(() => import('@/components/layout/lines-numbers'), {
  ssr: false,
});
const Terminal = dynamic(() => import('@/components/layout/terminal'), {
  ssr: false,
});

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className='flex flex-col size-full'>
      <Header />
      <div className='flex size-full'>
        <Sidebar />

        <ResizablePanelGroup direction='vertical' className='size-full'>
          <ResizablePanel defaultSize={91}>
            <div className='size-full flex overflow-hidden'>
              <LinesNumber />
              <div
                id='scroll'
                className='size-full overflow-y-auto overflow-x-hidden scroll-smooth'
              >
                {children}
              </div>
            </div>
          </ResizablePanel>
          <ResizableHandle className='hidden sm:block' withHandle />
          <ResizablePanel
            className='hidden sm:block'
            defaultSize={9}
            minSize={4}
            maxSize={25}
          >
            <Terminal />
          </ResizablePanel>
        </ResizablePanelGroup>
      </div>
      <Footer />
    </div>
  );
}
