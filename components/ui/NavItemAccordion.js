import React, {useState} from 'react';
import NavSubItem from './NavSubItem';
import {Accordion} from 'flowbite-react';

export default function NavItemAccordion({text}) {

  return (
    <Accordion alwaysOpen={false} flush={true} className='border-t border-eclipse'>
      <Accordion.Panel>
        <Accordion.Title className='p-0'>
          <p className='px-0 text-1xl text-black tracking-tight flex justify-between'>
            {text}
          </p>
        </Accordion.Title>
        <Accordion.Content className='p-0'>
          <NavSubItem link='#' text='Архитектурная 3D визуализация' />
          <NavSubItem link='#' text='Продуктовая 3D визуализация' />
          <NavSubItem link='#' text='Моушн & Видеопродакшн' />
          <NavSubItem link='#' text='3D моделирование' />
        </Accordion.Content>
      </Accordion.Panel>
    </Accordion>
  );
}
