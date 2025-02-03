
import InstagramIcon from '@mui/icons-material/Instagram'; 
import XIcon from '@mui/icons-material/X'; 
import FacebookIcon from '@mui/icons-material/Facebook'; 
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

function Footer() {
    return (
        <footer className="bg-background text-white p-6 text-sm text-center">
            <div className="flex justify-center space-x-6 mb-4">
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                    <InstagramIcon fontSize="large" />
                </a>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                    <XIcon fontSize="large" />
                </a>
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                    <FacebookIcon fontSize="large" />
                </a>
                <a href="https://github.com/juanpiRiv" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
                    <GitHubIcon fontSize="large" />
                </a>
                <a href="https://www.linkedin.com/in/juanriveroalbornoz/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
                    <LinkedInIcon fontSize="large" />
                </a>
            </div>
            <p>&copy; 2025 App Nextjs</p>
            <p>Dev By Juan Pablo</p>
        </footer>
    );
}

export default Footer;
