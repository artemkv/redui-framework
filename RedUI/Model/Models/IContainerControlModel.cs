using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Models
{
	public interface IContainerControlModel : IControlModel
	{
		IControlModel[] controls { get; }
		string bindingContext { get; } // TODO: think about moving this property to a separate interface between IContainerControlModel and IControlModel
	}
}
