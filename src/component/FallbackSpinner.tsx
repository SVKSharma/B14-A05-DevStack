export const FallbackSpinner = ()=>{
    return (
      <div className="flex min-h-100 w-full items-center justify-center">
        <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-pink-600" />
      </div>
    );
}