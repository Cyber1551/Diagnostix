using Diagnostix_Backend.Accessors;
using Diagnostix_Backend.Managers.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Diagnostix_Backend.Managers
{
    public class ManagerFactory
    {
        private AccessorFactory accessorFactory;
        public ManagerFactory(AccessorFactory factory)
        {
            accessorFactory = factory;
        }
        public T CreateManager<T>() where T : class, IBaseManager
        {
            return (T)Activator.CreateInstance(typeof(T), accessorFactory);
        }
    }
}
