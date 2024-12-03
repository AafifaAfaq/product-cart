export default function Footer() {
    return (
        <footer className="bg-gray-700 text-white py-8">
            <div className="container mx-auto text-center">
                {/* Copyright */}
                <p className="text-sm">&copy; 2024 BrandName. All rights reserved.</p>
                
                {/* Social Media Links */}
                <div className="mt-4 flex justify-center space-x-6">
                    <a
                        href="#"
                        className="text-gray-400 hover:text-blue-400 transition"
                        aria-label="Facebook"
                    >
                        Facebook
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-blue-400 transition"
                        aria-label="Twitter"
                    >
                        Twitter
                    </a>
                    <a
                        href="#"
                        className="text-gray-400 hover:text-blue-400 transition"
                        aria-label="Instagram"
                    >
                        Instagram
                    </a>
                </div>
            </div>
        </footer>
    );
}
