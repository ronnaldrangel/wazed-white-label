// Versión alternativa con depuración más explícita que puedes probar
// pages/login.js
import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

export default function Login() {
  const [instanceName, setInstanceName] = useState('');
  const [isRedirecting, setIsRedirecting] = useState(false);
  const router = useRouter();

  // Comprobar que el router esté inicializado correctamente
  useEffect(() => {
    console.log('Router inicializado:', router);
  }, [router]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación básica
    if (!instanceName.trim()) {
      alert('Por favor, ingresa un nombre de instancia');
      return;
    }

    try {
      console.log('Iniciando redirección a:', `/instances/${instanceName}`);
      setIsRedirecting(true);

      // Método 1: Usando router.push
      await router.push({
        pathname: '/instances/[instanceName]',
        query: { instanceName: instanceName },
      });

      // Si llegamos aquí, la redirección no funcionó de inmediato
      console.log('router.push completado, verificando redirección...');

      // Método 2: Redirección manual como respaldo
      setTimeout(() => {
        if (window.location.pathname !== `/instances/${instanceName}`) {
          console.log('Usando redirección alternativa');
          window.location.href = `/instances/${instanceName}`;
        }
      }, 1000);
    } catch (error) {
      console.error('Error durante la redirección:', error);
      alert('Hubo un problema con la redirección. Usando método alternativo...');
      window.location.href = `/instances/${instanceName}`;
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center p-4">
      <Head>
        <title>WhatsApp Manager - Login</title>
        <meta name="description" content="Evolution Manager login page" />
      </Head>

      <div className="w-full max-w-md bg-slate-50 p-8 rounded-md shadow-sm">
        <div className="flex justify-center mb-4">
          <div className="relative w-32 h-32">
            <Image
              src="/images/logo.png"
              alt="Evolution Manager Logo"
              layout="fill"
              objectFit="contain"
              priority
            />
          </div>
        </div>
        <h1 className="text-center text-2xl font-semibold text-gray-800 mb-2">
          WhatsApp Manager
        </h1>
        <p className="text-center text-gray-600 mb-6">
          Ingrese sus credenciales para continuar
        </p>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="instanceName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Instance Name <span className="text-red-500">*</span>
            </label>
            <input
              id="instanceName"
              type="text"
              value={instanceName}
              onChange={(e) => setInstanceName(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-green-500"
              required
              disabled={isRedirecting}
            />
          </div>

          <button
            type="submit"
            className={`w-full ${isRedirecting ? 'bg-gray-400' : 'bg-emerald-600 hover:bg-emerald-700'} text-white py-2 px-4 rounded-md transition duration-300`}
            disabled={isRedirecting}
          >
            {isRedirecting ? 'Redirigiendo...' : 'Continuar'}
          </button>

          {isRedirecting && (
            <p className="mt-2 text-center text-sm text-gray-500">
              Redirigiendo a /instances/{instanceName}...
            </p>
          )}
        </form>
      </div>
    </div>
  );
}