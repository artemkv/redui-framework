using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Controls
{
	public interface IDataBoundControl : IControl
	{
		void bind(object dataObject);
		object bindingContext { get; }
	}
}
