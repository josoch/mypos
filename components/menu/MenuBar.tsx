'use client';

import { useRouter } from 'next/navigation';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarSub,
  MenubarSubContent,
  MenubarSubTrigger,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { menuItems } from './menu-items';

export function MenuBar() {
  const router = useRouter();

  const handleMenuClick = (item: string) => {
    switch (item) {
      case 'New Sales':
        router.push('/pos');
        break;
      case 'New Item':
      case 'Receive Items':
        router.push('/inventory/items');
        break;
      default:
        break;
    }
  };

  return (
    <Menubar className="border-none">
      {Object.entries(menuItems).map(([key, items]) => (
        <MenubarMenu key={key}>
          <MenubarTrigger className="font-medium">{key}</MenubarTrigger>
          <MenubarContent>
            {items.map((item: any) => {
              if (typeof item === 'string') {
                return (
                  <MenubarItem key={item} onClick={() => handleMenuClick(item)}>
                    {item}
                  </MenubarItem>
                );
              }
              
              const [subMenuTitle, subMenuItems] = Object.entries(item)[0];
              return (
                <MenubarSub key={subMenuTitle}>
                  <MenubarSubTrigger>{subMenuTitle}</MenubarSubTrigger>
                  <MenubarSubContent>
                    {(subMenuItems as string[]).map((subItem: string) => (
                      <MenubarItem key={subItem} onClick={() => handleMenuClick(subItem)}>
                        {subItem}
                      </MenubarItem>
                    ))}
                  </MenubarSubContent>
                </MenubarSub>
              );
            })}
          </MenubarContent>
        </MenubarMenu>
      ))}
    </Menubar>
  );
}