using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Model.Models;

namespace Model.Controls
{
	public interface IControl
	{
		IControlModel model { get; }
		string id { get; }
		string name { get; }
		string type { get; }
		IControl parent { get; }
		IWindow window { get; }
    
		object getElement();
	}
}
