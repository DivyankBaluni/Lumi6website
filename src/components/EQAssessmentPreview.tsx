
import React from 'react';
import { Button } from './ui/button';
import { Sparkles, ArrowRight } from 'lucide-react';

const EQAssessmentPreview: React.FC = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-rebuttl-blue/5 via-white to-rebuttl-purple/5">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-3xl p-8 md:p-16 shadow-2xl border border-gray-100 relative overflow-hidden">
                    {/* Decorative elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-rebuttl-blue/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-rebuttl-purple/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-rebuttl-blue/10 text-rebuttl-blue rounded-full text-sm font-bold mb-6">
                                <Sparkles className="w-4 h-4" />
                                Coming Soon: Interactive Preview
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Experience the Power of <span className="text-rebuttl-blue">EQ Analytics</span>
                            </h2>
                            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                                Our upcoming interactive preview will let you test drive real-world scenarios and see how our proprietary algorithms measure emotional competency in real-time.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button
                                    className="bg-rebuttl-blue hover:bg-rebuttl-blue/90 text-white px-8 py-6 text-lg rounded-xl h-auto"
                                    onClick={() => window.open('https://app.lumi6.com/signup', '_blank')}
                                >
                                    Join the Waitlist
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Button>
                                <Button
                                    variant="outline"
                                    className="px-8 py-6 text-lg rounded-xl h-auto border-gray-200"
                                    onClick={() => {
                                        const el = document.getElementById('how-it-works');
                                        el?.scrollIntoView({ behavior: 'smooth' });
                                    }}
                                >
                                    See How It Works
                                </Button>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="aspect-square bg-gradient-to-tr from-gray-50 to-white rounded-2xl border border-gray-100 shadow-inner flex items-center justify-center overflow-hidden group">
                                {/* Mockup of an assessment screen */}
                                <div className="w-4/5 h-4/5 bg-white rounded-xl shadow-lg border border-gray-100 p-6 transform group-hover:scale-105 transition-transform duration-500">
                                    <div className="h-2 w-1/3 bg-gray-100 rounded mb-4"></div>
                                    <div className="h-6 w-4/5 bg-gray-200 rounded mb-8"></div>
                                    <div className="space-y-4">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="flex items-center gap-3 p-3 border border-gray-100 rounded-lg hover:border-rebuttl-blue/30 transition-colors">
                                                <div className="w-4 h-4 rounded-full border border-gray-300"></div>
                                                <div className="h-3 flex-1 bg-gray-50 rounded"></div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="mt-8 flex justify-end">
                                        <div className="h-8 w-24 bg-rebuttl-blue/20 rounded-lg animate-pulse"></div>
                                    </div>
                                </div>

                                {/* Animated HUD elements */}
                                <div className="absolute top-10 right-10 p-3 bg-white/90 backdrop-blur-md rounded-lg shadow-md border border-rebuttl-blue/10 animate-bounce">
                                    <div className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Social Awareness</div>
                                    <div className="text-lg font-bold text-rebuttl-blue">84%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EQAssessmentPreview;
