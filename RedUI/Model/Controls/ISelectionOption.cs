using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Controls
{
	public interface ISelectionOption
	{
		object id { get; }
		object value { get; }
	}
}
