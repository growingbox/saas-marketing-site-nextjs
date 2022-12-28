import { Listbox } from '@headlessui/react';
import { CheckIcon } from '@heroicons/react/24/outline';
import clsx from 'clsx';
import { useTheme } from 'next-themes';

import {
  ClientOnly,
} from '../client-only';

const themes = [{
  key: 'light',
  title: '明亮'
}, {
  key: 'dark',
  title: '暗黑',
}, {
  key: 'system',
  title: '系统',
}];

export function ColorModeSelect(): JSX.Element {
  const { theme, setTheme } = useTheme();
  const handleChange = (value: string) => {
    setTheme(value);
  };

  console.log('theme: ', theme);

  return (
    <ClientOnly>
      <Listbox
        value={theme || 'system'}
        onChange={handleChange}
      >
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
            {themes.filter(x => x.key === theme).map(it => it.title)}
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {themes.map((theme) => (
              <Listbox.Option 
                key={theme.key} 
                value={theme.key} 
                className={({ active }) =>
                  clsx(
                    active ? 'text-white bg-indigo-600' : 'text-gray-900',
                    'relative cursor-default select-none py-2 pl-3 pr-9'
                  )
                }
              >
                {({ active, selected }) => (
                  <span 
                    className={clsx(
                      active ? 'text-white' : 'text-indigo-600',
                      'absolute inset-y-0 right-0 flex items-center pr-4'
                    )}
                  >
                    {selected && <CheckIcon className="h-5 w-5" aria-hidden="true"/>}
                    {theme.title}
                  </span>
                )}
              </Listbox.Option>          
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </ClientOnly>
  );
}
