/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/my-portfolio",
    output: "export",
    reactStrictMode: true,
};

export default nextConfig;

// import path from 'path';

// const nextConfig = {
//   webpack(config) {
//     config.resolve.alias['@'] = path.resolve(__dirname, './src');
//     return config;
//   }
// };

// export default nextConfig;
