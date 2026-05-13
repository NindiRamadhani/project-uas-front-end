import React from 'react';

const LandingPage = () => {
    return (
        <div className="min-h-screen bg-white font-sans text-gray-900">
            
            {/* Navbar */}
            <nav className="bg-[#9D50E1] p-4 flex justify-between items-center text-white px-8">
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#9D50E1] font-bold">
                        IS
                    </div>
                    <span className="font-bold text-xl">InkluSpace</span>
                </div>
                <button className="font-semibold hover:underline">Masuk</button>
            </nav>

            <main className="max-w-5xl mx-auto py-12 px-6 space-y-16">
                
                {/* Hero Section */}
                <section className="bg-[#F3E8FF] rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
                    <div className="flex-1 space-y-4">
                        <h1 className="text-[#8A39E1] text-3xl font-extrabold leading-tight">
                            Bersama Membangun Masyarakat Inklusif
                        </h1>
                        <p className="text-gray-700 text-lg">
                            InkluSpace menghubungkan mereka yang membutuhkan dengan mereka yang ingin berbagi.
                        </p>
                    </div>
                    <div className="flex-1">
                        <img 
                            src="/inkluspace.jpeg"  // Path gambar di folder public
                            alt="Masyarakat Inklusif" 
                            className="rounded-xl shadow-md w-full object-cover"
                        />
                    </div>
                </section>

                {/* Nilai-Nilai Kami */}
                <section className="bg-[#F3E8FF] rounded-2xl p-10 text-center shadow-sm">
                    <h2 className="text-[#8A39E1] text-2xl font-bold mb-2">Nilai-Nilai Kami</h2>
                    <p className="text-gray-600 mb-8">Komitmen kami untuk menciptakan lingkungan yang inklusif</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Card Inklusif */}
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-20 h-20 bg-[#F472B6] rounded-2xl flex items-center justify-center text-white shadow-lg">
                                {/* SVG Icon untuk Inklusif */}
                                <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v12m0 0l4-4m-4 4l-4-4" />
                                </svg>
                            </div>
                            <span className="font-bold text-lg">Inklusif</span>
                        </div>
                        {/* Card Aman */}
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-20 h-20 bg-[#F472B6] rounded-2xl flex items-center justify-center text-white shadow-lg">
                                {/* SVG Icon untuk Aman dan Terpercaya */}
                                <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4v2m-7-7h14M5 15h14M12 3v12m0 0l4-4m-4 4l-4-4" />
                                </svg>
                            </div>
                            <span className="font-bold text-lg">Aman dan Terpercaya</span>
                        </div>
                        {/* Card Mudah Digunakan */}
                        <div className="flex flex-col items-center gap-3">
                            <div className="w-20 h-20 bg-[#F472B6] rounded-2xl flex items-center justify-center text-white shadow-lg">
                                {/* SVG Icon untuk Mudah Digunakan */}
                                <svg className="w-12 h-12" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v14M5 12h14" />
                                </svg>
                            </div>
                            <span className="font-bold text-lg">Mudah Digunakan</span>
                        </div>
                    </div>
                </section>

                {/* Tentang Kami Section */}
                <section className="flex flex-col md:flex-row items-start gap-12 pt-8">
                    <div className="flex-1 relative">
                        {/* Background Blob Shape */}
                        <div className="absolute -z-10 bg-[#F3E8FF] w-full h-full rounded-full blur-2xl opacity-70"></div>
                        <p className="text-[#8A39E1] text-2xl font-bold italic leading-relaxed py-8">
                            "Menciptakan ruang di mana setiap orang, tanpa terkecuali, memiliki kesempatan yang sama untuk berkembang."
                        </p>
                    </div>
                    <div className="flex-1 space-y-4">
                        <h2 className="text-[#8A39E1] text-2xl font-bold uppercase tracking-wide">TENTANG KAMI</h2>
                        <p className="text-gray-700 leading-relaxed text-justify">
                            InkluSpace adalah platform digital yang dirancang khusus untuk memperkuat ekosistem inklusif di Indonesia. Melalui fitur berbagi informasi dan pendampingan relawan, kami berkomitmen untuk mendukung kemandirian dan kesejahteraan komunitas disabilitas. Kami mengutamakan keamanan, kenyamanan, dan kemudahan akses bagi setiap pengguna.
                        </p>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default LandingPage;