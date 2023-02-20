
const Footer = () => {
  return (
        <footer className="bg-gray-800 text-gray-200 py-4">
            <div className="container mx-auto text-center">
                <p className="text-sm">
                    © 2023 Mi sitio web | Todos los derechos reservados.
                </p>
                <p className="text-xs mt-2">
                    Diseñado y desarrollado por{' '}
                    <a
                        href="https://brajhandev.netlify.app/"
                        className="text-teal-500 hover:text-teal-400"
                    >
                        BrajhanDev
                    </a>
                </p>
            </div>
        </footer>
  )
}

export default Footer
