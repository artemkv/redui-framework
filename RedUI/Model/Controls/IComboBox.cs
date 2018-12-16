using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model.Controls
{
	interface IComboBox : IDataBoundControl
	{
		ISelectionOption[] options { get; }
	}
}
