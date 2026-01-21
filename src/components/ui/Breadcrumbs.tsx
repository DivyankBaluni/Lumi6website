import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumbs: React.FC = () => {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);

    if (pathnames.length === 0) return null;

    return (
        // <nav className="flex px-4 md:px-10 py-3 text-gray-500 text-sm bg-rebuttl-lightBg" aria-label="Breadcrumb">
        <nav aria-label="Breadcrumb" className=" inline-flex items-center text-sm text-gray-500 px-4 py-2 rounded-md">

            <ol className="inline-flex items-center space-x-1 md:space-x-3">
                <li className="inline-flex items-center">
                    <Link to="/" className="inline-flex items-center hover:text-rebuttl-blue transition-colors">
                        <Home className="w-4 h-4 mr-2" />
                        Home
                    </Link>
                </li>
                {pathnames.map((value, index) => {
                    const last = index === pathnames.length - 1;
                    const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                    const label = value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, ' ');

                    return (
                        <li key={to}>
                            <div className="flex items-center">
                                <ChevronRight className="w-4 h-4 text-gray-300" />
                                {last ? (
                                    <span className="ml-1 md:ml-2 font-bold text-rebuttl-blue truncate max-w-[150px] md:max-w-none">
                                        {label}
                                    </span>
                                ) : (
                                    <Link
                                        to={to}
                                        className="ml-1 md:ml-2 hover:text-rebuttl-blue transition-colors"
                                    >
                                        {label}
                                    </Link>
                                )}
                            </div>
                        </li>
                    );
                })}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;
