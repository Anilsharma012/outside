
import React from 'react';
import { LOGO_URL } from '../constants';

const SignIn: React.FC = () => {
  return (
    <div className="fade-in bg-[#FAF9F6] min-h-screen flex flex-col">
      <div className="flex-1 flex flex-col lg:flex-row">
        <div className="flex-1 px-8 md:px-24 py-16 flex flex-col">
          <div className="mb-20">
            <img src={LOGO_URL} className="h-10 md:h-12 w-auto object-contain" alt="United Strangers" />
          </div>

          <div className="max-w-md w-full space-y-10">
            <div>
              <h1 className="text-4xl md:text-5xl font-display text-primary mb-4 leading-tight">
                Login to become a member
              </h1>
              <p className="text-[15px] text-gray-500 font-sans font-light">
                You're moments away from becoming a member.
              </p>
            </div>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="text-[14px] font-medium text-primary">Email</label>
                <input 
                  type="email" 
                  placeholder="Email" 
                  className="w-full bg-[#FAF9F6] border border-gray-200 py-3 px-4 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans text-sm" 
                />
              </div>

              <div className="space-y-2">
                <label className="text-[14px] font-medium text-primary">Password</label>
                <input 
                  type="password" 
                  placeholder="Password" 
                  className="w-full bg-[#FAF9F6] border border-gray-200 py-3 px-4 focus:ring-1 focus:ring-primary rounded-sm outline-none font-sans text-sm" 
                />
              </div>

              <div className="text-left">
                <a href="#" className="text-[14px] text-primary underline font-medium">Forgot password?</a>
              </div>

              <button type="button" className="w-full bg-primary text-white py-4 rounded-full font-condensed font-black uppercase tracking-ace-wide text-[14px] hover:bg-black transition-all shadow-md">
                Sign In
              </button>
            </form>

            <div className="relative flex items-center py-4">
              <div className="flex-grow border-t border-gray-200"></div>
              <span className="flex-shrink mx-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">OR</span>
              <div className="flex-grow border-t border-gray-200"></div>
            </div>

            <div className="space-y-4">
              <button className="w-full bg-[#1877F2] text-white py-3.5 px-6 rounded-sm flex items-center gap-4 hover:opacity-90 transition-opacity">
                <span className="material-symbols-outlined text-2xl">facebook</span>
                <span className="text-[14px] font-bold">Continue with Facebook</span>
              </button>
              <button className="w-full bg-[#4285F4] text-white py-3.5 px-6 rounded-sm flex items-center gap-4 hover:opacity-90 transition-opacity">
                <div className="bg-white p-0.5 rounded-sm">
                  <img src="https://www.google.com/favicon.ico" className="w-5 h-5" alt="Google" />
                </div>
                <span className="text-[14px] font-bold">Continue with Google</span>
              </button>
            </div>
          </div>
        </div>

        <div className="hidden lg:block flex-1 relative min-h-[600px]">
          <img 
            src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2000&auto=format&fit=crop" 
            className="w-full h-full object-cover" 
            alt="Sign In Lifestyle" 
          />
        </div>
      </div>

      <footer className="bg-[#1A1A1A] text-white py-12 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="mb-4">
            <img src={LOGO_URL} className="h-10 md:h-12 mx-auto w-auto object-contain brightness-0 invert" alt="United Strangers" />
          </div>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-[11px] font-medium text-gray-400">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default SignIn;
