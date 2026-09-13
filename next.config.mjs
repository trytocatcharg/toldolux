/** @type {import('next').NextConfig} */
const nextConfig = {
	// output: 'export', // descomenta cuando definas el hosting estático
	// distDir: 'dist',
	images: {
		unoptimized: true,
	},
	trailingSlash: true,
	async headers() {
		return [
			{
				source: "/:path*",
				headers: [
					{
						key: "X-Robots-Tag",
						value: "noindex, nofollow",
					},
				],
			},
		];
	},
};

export default nextConfig;
