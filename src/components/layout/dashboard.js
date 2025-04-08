import React from 'react';
import Navbar from "../navbar";
import Link from 'next/link'
import { PlusIcon } from '@heroicons/react/20/solid';
import WhatsAppButton from "../../components/WhatsAppButton";
import Biblia from "../Bible"
import ToggleMode from "../ui/toggle-mode"
import { Disclosure } from '@headlessui/react'
import Image from 'next/image'


export default function Layout({ children, title }) {
    return (
        <>
            <div className="min-h-full">

                {/* <ToggleMode /> */}
                {/* <ToggleMode /> */}
                <Disclosure as="nav" className="bg-white shadow-sm border-b border-gray-100 dark:bg-gray-900 dark:border-gray-700">
                    {() => (
                        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                            <div className="flex h-16 justify-between items-center">
                                {/* Condición para mostrar el logo, ícono y nombre del reseller, o un mensaje de carga */}
                                <div className="flex flex-shrink-0 items-center">

                                    <Image
                                        className="block h-10 w-auto"
                                        src="/images/icon.png"
                                        alt="Logo"
                                        width={236}
                                        height={60}
                                    />
                                </div>

                                {/* Texto a la derecha con fondo verde y bordes redondeados */}
                                <div className="flex items-center">
                                    <span className="bg-green-700 text-white font-semibold px-4 py-1 rounded-full text-sm">
                                        Tu Instancia
                                    </span>
                                </div>
                            </div>
                        </div>
                    )}
                </Disclosure>

                <main>
                    <div className="mx-auto max-w-7xl py-10 px-4 sm:px-6 lg:px-8">
                        {children}
                    </div>
                    <WhatsAppButton />
                </main>

            </div>
        </>
    );
};
