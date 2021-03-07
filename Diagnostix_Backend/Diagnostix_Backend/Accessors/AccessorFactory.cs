using Diagnostix_Backend.Accessors.Interfaces;
using Diagnostix_Backend.Database;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diagnostix_Backend.Accessors
{
    public class AccessorFactory
    {
        private DatabaseContext context;
        public AccessorFactory(DatabaseContext _context)
        {
            context = _context;
        }
        public T CreateAccessor<T>() where T : class, IBaseAccessor
        {
            return (T)Activator.CreateInstance(typeof(T), context);
        }
    }
}
